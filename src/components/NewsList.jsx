import { useQuery } from '@apollo/client';
import { GET_ALL_NEWS } from '../graphql/queries';

const NewsList = () => {
  const { data, loading, error } = useQuery(GET_ALL_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading news.</p>;

  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data.news.map((news) => (
          <div
            key={news.id}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm bg-gray-50 dark:bg-gray-800"
          >
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <p className="text-sm my-2">{news.description}</p>
            <a
              href={`/news/${news.id}`}
              className="text-blue-500 dark:text-blue-400 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
