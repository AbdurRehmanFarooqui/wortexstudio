import ArcGradient from "./ArcGradient";

const BottomCTA = () => {
  return (
    <div className="bg-black text-white pb-36">
      <ArcGradient />
      <div className="container mx-auto text-center py-12">
        <h2 className="text-4xl uppercase font-bold mb-6">Interested in working together?</h2>
        <p className="text-lg mb-10 font-quantico w-[50%] mx-auto">Let's create something amazing together. Whether you have a project in mind or just want to chat, I'm here to help.</p>
        <a href="mailto:contact@yourwebsite.com" className="bg-[#a600ff] text-white py-3 px-6 rounded-full font-bold hover:bg-[#8a00cc] transition-colors">
          Get in Touch
        </a>
      </div>
      {/* <div className="-scale-y-100">
      <ArcGradient />
      </div> */}
    </div>
  );
};

export default BottomCTA;