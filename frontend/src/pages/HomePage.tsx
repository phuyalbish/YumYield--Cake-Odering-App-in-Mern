import "../global.css";
import phoneimg from "../assets/phone.png";
import downloadImg from "../assets/downloadImg.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-lg py-8 flex flex-col gap-5 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Cake is a just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={phoneimg} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeweaway even faster!
          </span>
          <span>
            Download the YumYields application from either of the store for
            faster cake odering and personalized recommendations.
          </span>
          <img className="w-1/2" src={downloadImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
