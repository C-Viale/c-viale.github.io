type Project = {
  id: string;
  name: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "learn_opengl_br",
    name: "AprendaOpenGL",
    description: "A pt-BR translation of the original LearnOpenGL website.",
    href: "/projects/aprendaopengl",
  },
  {
    id: "athens_portal",
    name: "Athens Portal",
    description: "A mobile app built for my bachelor's degree final paper.",
    href: "/projects/athens-portal",
  },
  // {
  //   id: "conquest",
  //   name: "Conquest",
  //   description: "asdsadsd asdsa d asdas asd ",
  //   href: "/#",
  // },
  // {
  //   id: "rust_lexer",
  //   name: "Lexer with Rust",
  //   description: "lsadalsxasnvi. sdam cmai",
  //   href: "/#",
  // },
  // {
  //   id: "3d_rendering",
  //   name: "3D Renderer with OpenGL",
  //   description: "asijcodj c ias odi ",
  //   href: "/#",
  // },
];
