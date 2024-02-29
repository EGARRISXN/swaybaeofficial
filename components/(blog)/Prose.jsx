export default function Prose() {
  return (
    <div className='myProse'>
      <hr />
      <h1>This is a H1 tag</h1>
      <h2>This is a H2 tag</h2>
      <h3>This is a H3 tag</h3>
      <h4>This is a H4 tag</h4>
      <p>This is a p tag</p>

      <em>
        <p>This is an em tag</p>
      </em>

      <strong>
        <p>This is a strong tag</p>
      </strong>

      <a href='#'>
        <p>This is an a tag</p>
      </a>

      <p>
        <a href='#'>This is a nested a tag</a>
      </p>

      <code>This is a code tag</code>

      <blockquote>This is a blockquote tag</blockquote>

      <pre>
        <code>
          article class="prose"Garlic bread with cheese: What the science tells us For years parents
          <br />
          have espoused the health benefits of eating garlic bread with cheese to their children,
          <br />
          with the food earning such an iconic status in our culture that kids will often dress up
          <br />
          as warm, cheesy loaf for Halloween. But a recent study shows that the celebrated appetizer
          <br />
          may be linked to a series of rabies cases springing up around the country. article
        </code>
      </pre>
      <figure>
        <img
          src='https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'
          alt='test'
        />
        <figcaption>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old.
        </figcaption>
      </figure>
      <ol>
        <li>This is an ordered list</li>
        <li>This is an ordered list</li>
        <li>This is an ordered list</li>
      </ol>
      <ul>
        <li>This is an unordered list</li>
        <li>This is an unordered list</li>
        <li>This is an unordered list</li>
      </ul>
      <p>We even included table styles, check it out:</p>
      <table>
        <thead>
          <tr>
            <th>Wrestler</th>
            <th>Origin</th>
            <th>Finisher</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bret "The Hitman" Hart</td>
            <td>Calgary, AB</td>
            <td>Sharpshooter</td>
          </tr>
          <tr>
            <td>Stone Cold Steve Austin</td>
            <td>Austin, TX</td>
            <td>Stone Cold Stunner</td>
          </tr>
          <tr>
            <td>Randy Savage</td>
            <td>Sarasota, FL</td>
            <td>Elbow Drop</td>
          </tr>
          <tr>
            <td>Vader</td>
            <td>Boulder, CO</td>
            <td>Vader Bomb</td>
          </tr>
          <tr>
            <td>Razor Ramon</td>
            <td>Chuluota, FL</td>
            <td>Razor's Edge</td>
          </tr>
        </tbody>
      </table>
      <p>Hopefully that looks good enough to you.</p>
      <h3>What about nested lists?</h3>
      <p>
        Nested lists basically always look bad which is why editors like Medium don't even let you
        do it, but I guess since some of you goofballs are going to do it we have to carry the
        burden of at least making it work.
      </p>
      <ol>
        <li>
          <strong>Nested lists are rarely a good idea.</strong>
          <ul>
            <li>
              You might feel like you are being really "organized" or something but you are just
              creating a gross shape on the screen that is hard to read.
            </li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
          </ul>
        </li>
        <li>
          <strong>Since we need to have more items, here's another one.</strong>
          <ul>
            <li>I'm not sure if we'll bother styling more than two levels deep.</li>
            <li>Two is already too much, three is guaranteed to be a bad idea.</li>
            <li>If you nest four levels deep you belong in prison.</li>
          </ul>
        </li>
        <li>
          <strong>Two items isn't really a list, three is good though.</strong>
          <ul>
            <li>Again please don't nest lists if you want people to actually read your content.</li>
            <li>Nobody wants to look at this.</li>
            <li>I'm upset that we even have to bother styling this.</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}

// import {PortableText} from '@portabletext/react'
// import {portableTextComponents} from '@/sanity/portableTextComponents'

// export default function Prose(props) {
//   const {value, children} = props

//   return (
//     <div className="prose prose-slate md:prose-lg lg:prose-xl w-full prose-h2:text-cyan-800 prose-h3:text-cyan-700 prose-a:text-cyan-500 prose-a:transition-colors prose-a:duration-200 hover:prose-a:text-pink-500 prose-code:text-pink-700 prose-h2:font-display prose-h3:font-display">
//       {value && value.length > 0 ? (
//         <PortableText value={value} components={PortableTextComponents} />
//       ) : (
//         children
//       )}
//     </div>
//   )
// }
