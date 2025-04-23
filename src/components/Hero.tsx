
import Scene3D from './Scene3D';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <Scene3D />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Making Digital Assets Matter
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Founded in Uganda, bit2Big has grown into a leading provider of digital finance solutions, cybersecurity, and professional training. Our expertise in cryptocurrency trading and blockchain technology has established us as a trusted leader across Africa.
          </p>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">3000+</div>
              <div className="text-white/60">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-white/60">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-white/60">Client Rating</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1288&auto=format&fit=crop"
              alt="Banking App"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
