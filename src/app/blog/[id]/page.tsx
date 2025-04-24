export default async function page({ params }) {
  console.log(params);
  const { id } = await params;

  return <div>ブログ:{id}</div>;
}
