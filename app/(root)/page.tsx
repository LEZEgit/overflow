import { LeftMenu } from "@/components/menu";
import AuthToast from "@/components/AuthToast";

const Home = () => {
  return (
    <div className="background-light900_dark200 mt-12">
      <AuthToast />
      {/* <OrangeButton>Ask a Question</OrangeButton> */}
      <LeftMenu />
      <div className="ml-45 flex flex-col overflow-y-auto px-4 max-sm:ml-0">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, atque! Reprehenderit, at harum. Commodi
          sequi, dolores eos molestiae odit esse minus quae vitae rem, voluptatem, voluptates nesciunt ullam iure enim
          facilis dicta!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, atque! Reprehenderit, at harum. Commodi
          sequi, dolores eos molestiae odit esse minus quae vitae rem, voluptatem, voluptates nesciunt ullam iure enim
          facilis dicta!
        </p>
      </div>
    </div>
  );
};

export default Home;
