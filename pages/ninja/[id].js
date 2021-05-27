import ninja from ".";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toSrting() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = fetch("https://jsonplaceholder.typicode.com/users/" + id);
};
export default function DetailPage() {
  return (
    <div>
      <h1>Detail page</h1>
    </div>
  );
}
