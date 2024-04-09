export const Footer = () => {
  return (
    <div className="bg-yellow-500 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center  py-10">
        <span className="text-3xl text-black font-bold tracking-tight">
          YumYields.com
        </span>
        <span className="text-black font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Services</span>
        </span>
      </div>

      <span className="container mx-auto flex justify-around">
        <p className=""> All Rights Reserved. 2024 @ yumyields.com</p>
      </span>
    </div>
  );
};
