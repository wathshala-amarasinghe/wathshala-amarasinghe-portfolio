import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getMdxFiles(dir: string) {
  const dirPath = path.join(contentDirectory, dir);
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  return fs.readdirSync(dirPath).filter((file) => file.endsWith(".mdx"));
}

export function getMdxData(dir: string) {
  const files = getMdxFiles(dir);

  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const filePath = path.join(contentDirectory, dir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data, content } = matter(fileContent);

    return {
      slug,
      frontmatter: data,
      content,
    };
  });
}

export function getMdxBySlug(dir: string, slug: string) {
  const filePath = path.join(contentDirectory, dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data,
    content,
  };
}
