// *[_type == $type && slug.current == $slug]{
//     "current": {
//       "slug": slug.current, title, publicReleaseDate, "tags": tags[]->tag
//     },
//     "previous": *[_type == $type && count((tags[]->tag)[@ in ^.^.tags[]->tag]) > 0 && ^.publicReleaseDate > publicReleaseDate]|order(publicReleaseDate desc)[0]{
//         "slug": slug.current, title, publicReleaseDate, "tags": tags[]->tag
//     },
//     "next": *[_type == $type && count((tags[]->tag)[@ in ^.^.tags[]->tag]) > 0 && ^.publicReleaseDate < publicReleaseDate]|order(publicReleaseDate asc)[0]{
//         "slug": slug.current, title, publicReleaseDate, "tags": tags[]->tag
//     },
// }|order(publicReleaseDate)[0]
