import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  secure: true,
});

export const cloudinaryUpload = async ({
  url,
  id,
}: {
  url: string;
  id: string;
}) => {
  await cloudinary.uploader.upload(
    url,
    {
      public_id: id,
      use_filename: true,
      folder: "project-my-apartments",
    },
    (error, result) => {
      console.log(result, error);
    }
  );
};
