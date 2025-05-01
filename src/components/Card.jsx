import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Heart, Mail, User } from "lucide-react";
  
  export default function ProfileCard() {
    return (
      <Card className="w-[300px] bg-white shadow-lg rounded-xl overflow-hidden border-none">
        <CardHeader className="p-4 bg-green-100 flex items-center">
          <img
            src="https://via.placeholder.com/50" // Replace with actual profile image URL
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <CardTitle className="text-xl font-bold text-gray-800">Morgan Sweeney</CardTitle>
            <CardDescription className="text-sm text-gray-600">Ant Collector</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 bg-green-50">
          <p className="text-gray-700 text-sm">
            Morgan has collected ants since they were six years old and now has many dozen ants but none in their pants.
          </p>
          <div className="flex justify-around mt-4 text-gray-600">
            <Heart className="cursor-pointer hover:text-red-500" size={20} />
            <Mail className="cursor-pointer hover:text-blue-500" size={20} />
            <User className="cursor-pointer hover:text-green-500" size={20} />
          </div>
        </CardContent>
      </Card>
    );
  }