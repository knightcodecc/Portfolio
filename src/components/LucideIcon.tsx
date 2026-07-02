import React from "react";
import {
  BrainCircuit,
  BarChart3,
  Code2,
  Cpu,
  ShieldAlert,
  DatabaseBackup,
  FileCheck,
  Film,
  Mail,
  Github,
  Linkedin,
  FileText,
  Download,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  ExternalLink,
  Briefcase,
  Menu,
  X,
  ChevronRight,
  Star,
  GitFork,
  Clock,
  Sparkles,
  Code,
  Check,
  Search,
  ArrowUpRight,
  LucideProps
} from "lucide-react";

const iconsMap: Record<string, React.ComponentType<LucideProps>> = {
  BrainCircuit,
  BarChart3,
  Code2,
  Cpu,
  ShieldAlert,
  DatabaseBackup,
  FileCheck,
  Film,
  Mail,
  Github,
  Linkedin,
  FileText,
  Download,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Award,
  ExternalLink,
  Briefcase,
  Menu,
  X,
  ChevronRight,
  Star,
  GitFork,
  Clock,
  Sparkles,
  Code,
  Check,
  Search,
  ArrowUpRight
};

interface LucideIconProps extends LucideProps {
  name: string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
  const IconComponent = iconsMap[name];
  if (!IconComponent) {
    // Return a default fallback icon if not found
    return <Code {...props} />;
  }
  return <IconComponent {...props} />;
};
