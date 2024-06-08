import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { db } from "@/db";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const { base64file, configId } = await req.json();
    console.log("hello from upload api");

    // const image = formData.get("image") as unknown as File;
    const uploadResponse = await cloudinary.uploader.upload(base64file, {
      folder: "CaseCobra",
    });
    console.log("uploaded image", uploadResponse);
    if (!configId) {
      const configuration = await db.configuration.create({
        data: {
          height: uploadResponse.height,
          width: uploadResponse.width,
          imgUrl: uploadResponse.url,
        },
      });
      return NextResponse.json({ configId: configuration.id }, { status: 200 });
    } else {
      const updatedConfiguration = await db.configuration.update({
        where: {
          id: configId,
        },
        data: {
          croppedImageUrl: uploadResponse.url,
        },
      });
      return NextResponse.json(
        { configId: updatedConfiguration.id },
        { status: 200 }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
};
