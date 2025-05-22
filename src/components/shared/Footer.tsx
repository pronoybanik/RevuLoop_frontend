import Link from "next/link";
import { format } from "date-fns";
import Image from "next/image";
import logo from "../../assets/logo/2-removebg-preview.png";
import google from "../../assets/logo/google.png";
import apple from "../../assets/logo/apple.png";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Star,
  TrendingUp,
  Award,
  Users,
  ArrowRight
} from "lucide-react";
import { featuredReview } from "@/services/Review";
import { CardContent, CardTitle } from "../ui/card";
import { StarRating } from "../modules/All Review/ReviewDetails";
import { TReview } from "@/types/review";

const Footer = async () => {
  const page = "1";
  const limit = "6";
  const { data: featureds } = await featuredReview(page, limit);

  const quickLinks = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/gallery", label: "Gallery", icon: "🖼️" },
    { href: "/smartwatch", label: "Smartwatch", icon: "⌚" },
    { href: "/terms", label: "Terms & Conditions", icon: "📄" },
  ];

  const companyLinks = [
    { href: "/about", label: "About Us", icon: "ℹ️" },
    { href: "/blog", label: "Blog", icon: "📝" },
    { href: "/contact", label: "Contact Us", icon: "📞" },
    { href: "/privacy", label: "Privacy Policy", icon: "🔒" },
  ];

  const socialLinks = [
    { href: "#", icon: Facebook, label: "Facebook", color: "hover:text-blue-500" },
    { href: "#", icon: Twitter, label: "Twitter", color: "hover:text-sky-400" },
    { href: "#", icon: Instagram, label: "Instagram", color: "hover:text-pink-500" },
    { href: "#", icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-600" },
  ];

  const stats = [
    { icon: Users, label: "Active Users", value: "50K+" },
    { icon: Star, label: "Reviews", value: "25K+" },
    { icon: Award, label: "Awards", value: "15+" },
    { icon: TrendingUp, label: "Growth", value: "200%" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-600/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative container mx-auto">
        {/* Stats Section */}
        <div className="py-12 border-b border-gray-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto px-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-6">
            
            {/* Company Info + App Download */}
            <div className="lg:col-span-1 space-y-8">
              {/* Logo and Description */}
              <div>
                <div className="mb-6">
                  <Image 
                    src={logo} 
                    alt="footer logo" 
                    height={60} 
                    width={180} 
                    className="hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Your trusted platform for authentic product reviews and customer feedback. 
                  Join thousands of users making informed decisions every day.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>support@opinionoasis.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="w-4 h-4 text-green-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="w-4 h-4 text-red-400" />
                    <span>123 Tech Street, Digital City</span>
                  </div>
                </div>
              </div>

              {/* App Download Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white flex items-center">
                  <Download className="w-5 h-5 mr-2 text-blue-400" />
                  Download Our App
                </h3>
                <div className="space-y-3">
                  <Link href="#" className="block group">
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                      <Image src={google} alt="Google Play" width={40} height={40} className="rounded-lg" />
                      <div>
                        <p className="text-white font-medium text-sm">Get it on</p>
                        <p className="text-blue-400 font-semibold">Google Play</p>
                      </div>
                    </div>
                  </Link>
                  <Link href="#" className="block group">
                    <div className="flex items-center space-x-3 p-3 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-105">
                      <Image src={apple} alt="App Store" width={40} height={40} className="rounded-lg" />
                      <div>
                        <p className="text-white font-medium text-sm">Download on</p>
                        <p className="text-blue-400 font-semibold">App Store</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700/50 pb-2">
                Quick Links
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="group-hover:text-blue-400 transition-colors duration-300">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                ))}
              </div>

              {/* Company Links */}
              <h3 className="text-lg font-semibold mb-6 mt-8 text-white border-b border-gray-700/50 pb-2">
                Company
              </h3>
              <div className="space-y-3">
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="group-hover:text-blue-400 transition-colors duration-300">
                      {link.label}
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Highest Rated Reviews */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700/50 pb-2 flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Highest Rated Reviews
              </h3>
              <div className="space-y-4">
                {featureds?.highestRated?.slice(0, 3).map((review: TReview) => (
                  <div
                    key={review.id}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 shadow-lg hover:shadow-xl rounded-xl p-4 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <Image
                          width={50}
                          height={50}
                          src={review.image}
                          alt={review.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm truncate group-hover:text-blue-400 transition-colors duration-300">
                          {review.title}
                        </h4>
                        <p className="text-gray-500 text-xs">
                          {format(new Date(review.createdAt), "MMM dd, yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StarRating rating={review?.rating} />
                        <span className="text-yellow-400 text-sm font-medium">
                          {review?.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Most Voted Reviews */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white border-b border-gray-700/50 pb-2 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-400" />
                Most Voted Reviews
              </h3>
              <div className="space-y-4">
                {featureds?.mostVoted?.slice(0, 3).map((review: TReview) => (
                  <div
                    key={review.id}
                    className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 shadow-lg hover:shadow-xl rounded-xl p-4 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        <Image
                          width={50}
                          height={50}
                          src={review.image}
                          alt={review.title}
                          className="w-12 h-12 rounded-lg object-cover"
                        />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                          <TrendingUp className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium text-sm truncate group-hover:text-green-400 transition-colors duration-300">
                          {review.title}
                        </h4>
                        <p className="text-gray-500 text-xs">
                          {format(new Date(review.createdAt), "MMM dd, yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <StarRating rating={review?.rating} />
                        <span className="text-green-400 text-sm font-medium">
                          {review?.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700/50 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between px-6 space-y-6 lg:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <h4 className="text-sm font-semibold text-gray-400">Follow Us:</h4>
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-gray-800/50 rounded-full flex items-center justify-center border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:transform hover:scale-110 ${social.color}`}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-sm text-gray-500">
                Copyright © {new Date().getFullYear()} Team Opinion Oasis. All rights reserved.
              </p>
              <div className="flex items-center justify-center lg:justify-end space-x-6 mt-2">
                <Link href="/terms" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Terms & Conditions
                </Link>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;