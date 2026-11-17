type Project = {
  id: string;
  name: string;
  description: string;
  href: string;
};

export const projects: Project[] = [
  {
    id: "athens_portal",
    name: "Athens Portal",
    description: "A mobile app built for my bachelor's degree final paper.",
    href: "/projects/athens-portal",
  },
  {
    id: "godot_simple_inventory_system",
    name: "Simple Inventory System in Godot",
    description: "An infinite inventory system without management mechanics.",
    href: "https://github.com/C-Viale/godot-simple-inventory-system",
  },
  // {
  //   id: "aika_inspector",
  //   name: "AIKA Inspector",
  //   description: "A tool to visualize and convert assets from AIKA Online.",
  //   href: "https://github.com/C-Viale/aika-inspector",
  // },
];
