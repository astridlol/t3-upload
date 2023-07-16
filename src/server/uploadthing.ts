import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ "application/java-archive": { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(({ req, res }) => {
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: "fake" };
    })
    .onUploadComplete(({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
