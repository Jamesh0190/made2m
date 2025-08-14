import React, { useState, useRef } from 'react';
import { Play, Search, ShoppingBag, User, Menu, X, Camera, Eye, Ruler, Star } from 'lucide-react';
import './App.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const videoRef = useRef(null);

  // Sample data for demonstration
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'fashion', name: 'Fashion' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'home', name: 'Home & Living' }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Custom Tailored Suit',
      category: 'fashion',
      price: '£599',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
      hasAR: true,
      hasMeasurement: true,
      rating: 4.8,
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 2,
      name: 'Modular Sofa System',
      category: 'furniture',
      price: '£1,299',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
      hasAR: true,
      hasMeasurement: true,
      rating: 4.9,
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 3,
      name: 'Custom Kitchen Cabinets',
      category: 'home',
      price: '£2,499',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
      hasAR: true,
      hasMeasurement: true,
      rating: 4.7,
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 4,
      name: 'Bespoke Evening Dress',
      category: 'fashion',
      price: '£399',
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
      hasAR: true,
      hasMeasurement: true,
      rating: 4.8,
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 5,
      name: 'Custom Wardrobe',
      category: 'furniture',
      price: '£899',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      hasAR: true,
      hasMeasurement: true,
      rating: 4.6,
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    {
      id: 6,
      name: 'Smart Window Blinds',
      category: 'home',
      price: '£199',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      hasAR: true,
      hasMeasurement: true,
      rating: 4.5,
      video: 'https://www.w3schools.com/html/mov_bbb.mp4'
    }
  ];

  const liveShows = [
    {
      id: 1,
      title: "Fashion Friday: Custom Suits",
      host: "Sarah Johnson",
      time: "Live now",
      viewers: 1234,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Home Design Essentials",
      host: "Mike Chen",
      time: "Starting in 15 min",
      viewers: 856,
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop"
    }
  ];

  const filteredProducts = featuredProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const Header = () => (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-purple-600">MadeToMeasure.tv</h1>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Home</a>
            <a href="#live-tv" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Live TV</a>
            <a href="#products" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Products</a>
            <a href="#brands" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">Brands</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium">How It Works</a>
          </nav>

          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for custom products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-purple-600">
              <ShoppingBag className="w-6 h-6" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button className="p-2 text-gray-600 hover:text-purple-600">
              <User className="w-6 h-6" />
            </button>
            <button
              className="md:hidden p-2 text-gray-600 hover:text-purple-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Home</a>
            <a href="#live-tv" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Live TV</a>
            <a href="#products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Products</a>
            <a href="#brands" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Brands</a>
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">How It Works</a>
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  );

  const Hero = () => (
    <section id="home" className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Shop by Fit, Not by Size
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the future of shopping with AR-powered custom fitting, 3D visualization, and made-to-measure perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Camera className="w-5 h-5 mr-2" />
              Start AR Fitting
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Live TV
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const LiveTV = () => (
    <section id="live-tv" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Live Shopping TV</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {liveShows.map((show) => (
            <div key={show.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <img src={show.thumbnail} alt={show.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  {show.time}
                </div>
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-colors">
                  <Play className="w-16 h-16 text-white" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{show.title}</h3>
                <p className="text-gray-600 mb-4">Hosted by {show.host}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{show.viewers} viewers</span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Join Live
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProductGrid = () => (
    <section id="products" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover custom-made products tailored perfectly to your measurements and preferences
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`mx-2 mb-2 px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-purple-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow product-card">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute top-4 right-4 flex space-x-2">
                  {product.hasAR && (
                    <div className="bg-blue-500 text-white p-2 rounded-full">
                      <Eye className="w-4 h-4" />
                    </div>
                  )}
                  {product.hasMeasurement && (
                    <div className="bg-green-500 text-white p-2 rounded-full">
                      <Ruler className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <button 
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-30 transition-colors"
                  onClick={() => setActiveVideo(product.video)}
                >
                  <Play className="w-12 h-12 text-white opacity-0 play-button" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-purple-600 mb-4">{product.price}</p>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Features = () => (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three simple steps to get perfectly fitted, custom products delivered to your door
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Camera className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">1. Scan & Measure</h3>
            <p className="text-gray-600">
              Use your smartphone camera to get precise 3D body measurements or room dimensions in seconds
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">2. Visualize & Customize</h3>
            <p className="text-gray-600">
              See exactly how products will look on you or in your space with AR technology before you buy
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">3. Perfect Fit Delivered</h3>
            <p className="text-gray-600">
              Receive your custom-made product with a perfect fit guarantee and hassle-free returns
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MadeToMeasure.tv</h3>
            <p className="text-gray-400 mb-4">
              The future of shopping with AR-powered custom fitting and made-to-measure perfection.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#products" className="hover:text-white">Fashion</a></li>
              <li><a href="#products" className="hover:text-white">Furniture</a></li>
              <li><a href="#products" className="hover:text-white">Home & Living</a></li>
              <li><a href="#brands" className="hover:text-white">Brands</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#how-it-works" className="hover:text-white">How It Works</a></li>
              <li><a href="#" className="hover:text-white">Size Guide</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Newsletter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">YouTube</a></li>
              <li><a href="#" className="hover:text-white">TikTok</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 MadeToMeasure.tv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LiveTV />
      <ProductGrid />
      <Features />
      <Footer />
      
      {activeVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 video-modal" onClick={() => setActiveVideo(null)}>
          <div className="max-w-4xl w-full mx-4 relative">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <video 
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              controls
              autoPlay
              src={activeVideo}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;