import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DepartmentDetail } from '@/components/DepartmentDetail';
import { getCatalogData, getDepartmentBySlug } from '@/lib/catalog';

export async function generateStaticParams() {
  return getCatalogData().departments.map((department) => ({ slug: department.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const department = getDepartmentBySlug(params.slug);

  if (!department) {
    return { title: 'Department not found' };
  }

  return {
    title: department.name,
    description: department.summary,
  };
}

export default function DepartmentPage({ params }: { params: { slug: string } }) {
  const department = getDepartmentBySlug(params.slug);

  if (!department) {
    notFound();
  }

  const sourceMap = new Map(getCatalogData().sources.map((source) => [source.id, source]));
  const sources = department.sourceIds
    .map((id) => sourceMap.get(id))
    .filter((source): source is NonNullable<typeof source> => Boolean(source));

  return <DepartmentDetail department={department} sources={sources} />;
}
