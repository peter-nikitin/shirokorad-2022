interface Fallback {
  src: string;
  srcSet: string;
  sizes: string;
}

interface Source {
  srcSet: string;
  type: string;
  sizes: string;
}

interface Images {
  fallback: Fallback;
  sources: Source[];
}

interface GatsbyImageData {
  layout: "fixed" | "fullWidth" | "constrained";
  backgroundColor: string;
  images: Images;
  width: number;
  height: number;
}

interface ChildImageSharp {
  gatsbyImageData: GatsbyImageData;
}

interface AllMdx {
  nodes: Node[];
}
export namespace Grid {
  interface Node {
    slug: string;
    frontmatter: Frontmatter;
  }

  interface Thumb {
    childImageSharp: ChildImageSharp;
  }

  interface Frontmatter {
    title: string;
    thumb: Thumb;
  }

  interface Data {
    allMdx: AllMdx;
  }

  interface RootObject {
    data: Data;
  }
}

namespace IProjectItem {
  interface Node {
    childrenImageSharp: ChildrenImageSharp[];
  }

  interface AllFile {
    nodes: Node[];
  }

  interface Frontmatter {
    title: string;
  }

  interface Mdx {
    frontmatter: Frontmatter;
    slug: string;
    body: string;
  }

  interface Data {
    allFile: AllFile;
    mdx: Mdx;
  }

  interface RootObject {
    data: Data;
    extensions: Extensions;
  }
}
