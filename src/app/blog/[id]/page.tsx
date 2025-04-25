export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  return {
    title: `記事のIDが${id}のページです`,
  };
}

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export default async function page({ params }: Params) {
  const { id } = await params;

  return <div>ブログ:{id}</div>;
}
