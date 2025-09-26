import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { config } from "@/lib/config";
import { Eye } from "lucide-react";

type Masterclass = (typeof config.masterclasses)[0];

interface MasterclassCardProps {
  masterclass: Masterclass;
}

export const MasterclassCard = ({ masterclass }: MasterclassCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col text-left group cursor-pointer h-full transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="flex-grow">
            <h3 className="text-lg font-bold text-gray-900 mb-4 leading-tight">
              {masterclass.title}
            </h3>
          </div>
          <div className="flex justify-end items-center mt-4">
            <Eye className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{masterclass.title}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center text-center p-4">
          <img
            src={masterclass.image}
            alt={masterclass.expert}
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-200"
          />
          <p className="text-gray-600 mb-1">
            with <span className="font-semibold">{masterclass.expert}</span>
          </p>
          <p className="text-sm text-gray-500 mb-4">{masterclass.company}</p>
          <p className="text-sm text-gray-600 mb-4 italic">
            "{masterclass.excerpt}"
          </p>
          <Button asChild className="mt-auto w-full">
            <a href="/register">Register Now</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
