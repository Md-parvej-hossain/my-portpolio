import { Github, ExternalLink } from 'lucide-react';
import proj1 from '../assets/images/project1.png';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Projact from './Projact';

const MacOsButtons = () => (
  <div className="flex gap-2 mb-4">
    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors shadow-md" />
    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors shadow-md" />
  </div>
);

const ProjectShowcase = () => {
  const projects = [
    {
      title: 'MediCart – Medicine E-commerce Platform',
      description:
        'MediCart is a modern and user-friendly e-commerce website built to simplify the process of buying medicine online. Designed with React, Tailwind CSS, and Node.js, the platform allows users to browse, search, and purchase a wide range of medicines with ease. MediCart includes features like secure user authentication, real-time inventory updates, prescription uploads, and order tracking, offering a complete solution for online healthcare shopping.',
      tags: ['JavaScript', 'ReactJs', 'ExpressJs', 'Web Development'],
      links: {
        github: 'https://github.com/Md-parvej-hossain/Medicine-Selling-Shop-c',
        demo: 'https://assignment12-bf041.web.app/',
      },
      image: proj1,
      featured: true,
    },
  ];

  return (
    <div>
      <div className="pt-40 min-h-screen bg-[#0f1629] p-8 text-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center group rounded-lg p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 bg-[length:400%_400%] animate-gradient-xy hover:bg-[length:100%_100%] transition-all duration-700 shadow-lg"
            >
              {/* Image Section */}
              <div className="md:w-1/2 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Text Section */}
              <Card className="md:w-1/2 bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg overflow-hidden shadow-md transition-transform duration-500 group-hover:scale-105 group-hover:shadow-2xl p-6">
                <MacOsButtons />

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-emerald-400 text-sm font-mono mb-2 tracking-wide uppercase">
                        Featured Project
                      </div>
                      <CardTitle className="text-slate-100 text-3xl font-bold">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href={project.links.demo}
                        className="text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-125"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="mt-4">
                  <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 text-gray-900 shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Projact />
    </div>
  );
};

export default ProjectShowcase;
