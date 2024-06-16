import HueForgeTD from './components/hueforge-td';

const Home = async () => {
  return (
    <main className="flex flex-col justify-between p-24 gap-8">
      <p>
        This compilation includes all reported Transmission Distances (TD) from
        various brands, contributed by the community. Some of these may already
        exists in HueForge.
      </p>
      <p>
        All these values are possible thanks to the community; all the credit
        goes to those who contributed.
      </p>
      <div className="flex flex-col">
        <small>
          * Some of these HEX color codes are missing and may not be accurate.
        </small>
        <small>
          * PLA is considered the default type if not specified by the
          contributor.
        </small>
      </div>
      <HueForgeTD />
    </main>
  );
};

export default Home;
