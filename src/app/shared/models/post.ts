export class Post {
    categoryId?: number = 0;
    url?: string = "";
    image?: string = "";
    title?: string = "";
    paragraphs: Paragraph[] = [];
}

export class Paragraph {
    paragraph?: string = "";
}