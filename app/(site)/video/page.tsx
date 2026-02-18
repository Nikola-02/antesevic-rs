import { VideoList } from "@/components/site/video-list";
import { getVideos } from "@/lib/data";

export default async function VideoPage() {
  const videos = await getVideos();

  return (
    <section className="section-spacing">
      <div className="mx-auto w-full max-w-8xl">
        <h1 className="mb-10 font-serif text-5xl">Video galerija</h1>
        <VideoList videos={videos} />
      </div>
    </section>
  );
}
