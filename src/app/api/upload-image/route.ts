import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

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
    // console.log("uploaded data", uploadResponse);
    return NextResponse.json(
      { msg: "Image uploaded succesfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
};
