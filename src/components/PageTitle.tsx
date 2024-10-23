type PageTitleType = {
  title: string;
};

const PageTitle = ({ title }: PageTitleType) => {
  return <h2 className="text-white bg-gray-500 p-5 my-5">{title}</h2>;
};

export default PageTitle;
