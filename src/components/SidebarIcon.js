// src/components/SidebarIcon.js
import React from 'react';
import { Boxes, Smartphone, DownloadCloud, Users, BookOpen, Code } from 'lucide-react';

export default function SidebarIcon({ type }) {
  const iconMap = {
    'modulos': <Boxes size={18} />,
    'android': <Smartphone size={18} />,
    'actualizaciones': <DownloadCloud size={18} />,
    'reseller': <Users size={18} />,
    'guias-adicionales': <BookOpen size={18} />,
    'devs': <Code size={18} />,
    // Agrega otros iconos según necesites
  };

  return iconMap[type] || null;
}