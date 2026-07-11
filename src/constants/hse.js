/**
 * HSE (Health, Safety & Environment) constants
 */
import { Shield, Target, Users, FileCheck, BookOpen, GraduationCap, ClipboardCheck, Siren, Flame, Droplets, AlertCircle, Heart, CheckCircle } from "lucide-react";

export const HSE_PILLARS = [
  {
    icon: Shield,
    title: "Safety Management",
    description: "Comprehensive safety management systems aligned with international standards and local regulations.",
  },
  {
    icon: Target,
    title: "Risk Prevention",
    description: "Proactive risk assessment and mitigation strategies to prevent incidents before they occur.",
  },
  {
    icon: Users,
    title: "Training & Awareness",
    description: "Continuous HSE training programs for all employees, subcontractors, and site personnel.",
  },
  {
    icon: FileCheck,
    title: "Compliance",
    description: "Full compliance with ARAMCO, SABIC, and government HSE requirements and regulations.",
  },
];

export const TRAINING_PROGRAMS = [
  {
    icon: BookOpen,
    title: "HSE Induction",
    description: "Comprehensive safety orientation for all new employees and site personnel.",
    features: ["Site-specific hazards", "Emergency procedures", "PPE requirements", "Safety policies"],
  },
  {
    icon: Users,
    title: "Supervisor Training",
    description: "Advanced HSE leadership and management training for site supervisors and managers.",
    features: ["Risk assessment", "Incident investigation", "Safety leadership", "Team engagement"],
  },
  {
    icon: GraduationCap,
    title: "Specialized Courses",
    description: "Technical training for specific roles and high-risk activities.",
    features: ["Confined space entry", "Working at heights", "Hot work permits", "Electrical safety"],
  },
  {
    icon: ClipboardCheck,
    title: "Competency Assessment",
    description: "Regular evaluation and certification of HSE competencies across all levels.",
    features: ["Skills verification", "Knowledge testing", "Practical assessment", "Recertification"],
  },
];

export const EMERGENCY_CAPABILITIES = [
  {
    icon: Siren,
    title: "Medical Emergency Response",
    description: "On-site medical facilities and trained first aiders at all project locations.",
  },
  {
    icon: Flame,
    title: "Fire Fighting",
    description: "Certified fire fighting teams and equipment ready for immediate response.",
  },
  {
    icon: Droplets,
    title: "Spill Response",
    description: "Rapid response teams and equipment for environmental spill containment.",
  },
  {
    icon: AlertCircle,
    title: "Evacuation Procedures",
    description: "Well-defined evacuation plans and regular drills at all sites.",
  },
];

export const SAFETY_COMMITMENTS = [
  {
    icon: Heart,
    title: "People First",
    description: "The safety and well-being of our people is our highest priority, above all production targets.",
  },
  {
    icon: Target,
    title: "Zero Harm Goal",
    description: "We strive for zero injuries, zero illnesses, and zero environmental incidents on every project.",
  },
  {
    icon: Users,
    title: "Shared Responsibility",
    description: "Safety is everyone's responsibility, from leadership to every team member on site.",
  },
  {
    icon: CheckCircle,
    title: "Continuous Improvement",
    description: "We regularly review and enhance our HSE systems to achieve better outcomes.",
  },
];
