
export function BookCart({book}){
    // "id": 1,
    // "no_of_chapters": 6,
    // "author": "Masai",
    // "cover_photo": "",
    // "book_name": "Full-Stack Web Development",
    // "category": "Novel",
    // "release_year": 2019,
    return(<div style={{display:"flex",flexDirection:"column",gap:"10px",border:"1px solid gray"}}>
        <p>id: {book.id}</p>
        <p>author:{book.auther}</p>
        <p>cover_photo: {}</p>
        <p>book_name:{book.book_name}</p>
        <p>category:{book.category}</p>
        <p>release_year:{book.release_year}</p>
        </div>)
}