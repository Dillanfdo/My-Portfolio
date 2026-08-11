import type { Project } from '@/data/projects';
import BloomPreview from './previews/BloomPreview';
import HealthcarePreview from './previews/HealthcarePreview';
import InteriorPreview from './previews/InteriorPreview';
import RestaurantPreview from './previews/RestaurantPreview';

interface ProjectPreviewProps {
  preview: Project['preview'];
}

export default function ProjectPreview({ preview }: ProjectPreviewProps) {
  const previews = {
    bloom: BloomPreview,
    healthcare: HealthcarePreview,
    interior: InteriorPreview,
    restaurant: RestaurantPreview,
  };

  const PreviewComponent = previews[preview];

  return (
    <div className="w-full aspect-[16/10] overflow-hidden rounded-t-xl">
      <PreviewComponent />
    </div>
  );
}
