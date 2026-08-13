import type { ProjectPreview as PreviewType } from '@/data/upcomingProjects';
import InteriorPreview from './previews/InteriorPreview';
import RestaurantPreview from './previews/RestaurantPreview';
import ClinicPreview from './previews/ClinicPreview';

interface ProjectPreviewProps {
  preview: PreviewType;
}

export default function ProjectPreview({ preview }: ProjectPreviewProps) {
  const previews = {
    interior: InteriorPreview,
    restaurant: RestaurantPreview,
    clinic: ClinicPreview,
  };

  const PreviewComponent = previews[preview];

  return (
    <div className="w-full aspect-[16/10] overflow-hidden rounded-t-xl">
      <PreviewComponent />
    </div>
  );
}
