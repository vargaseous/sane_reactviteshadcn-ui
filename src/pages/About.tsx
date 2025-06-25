/*******************************************************************************
 * 
  Sane___________________________________________________github.com/vargaseous

  About.tsx
  About page layout.

*******************************************************************************/

export default function About() {
  return (
    // Body
    <div className="mt-30 lg:px-50">
      {/* Content can begin here! */}

      <div className="flex flex-col items-center space-y-5">
        <div className="text-3xl font-bold text-primary mt-10 mb-10">
          Go on.
        </div>

        <p className="text-xl text-primary max-w-250 text-center">
          This is a blank canvas for you to create your layouts. It is
          relatively unencumbered, so you can be as flexible as you need to be.
          Edit global styles in index.css (including any of the colours,
          hyperlink hover interactions, etc.) and style components and one-off
          elements with Tailwind.
        </p>

        <p className="text-xl text-primary max-w-250 text-center">
          Just take note: By default, the header overlaps with the body page
          content. So be sure to account for this in your page layouts. (See the
          first <code>div</code> in this code, which is styled with{" "}
          <code>mt-30</code>.)
        </p>

        <p className="text-xl text-primary max-w-250 text-center">
          There are comments throughout the code to guide you through
          manipulating the files. If you have any questions or bug reports,
          please head to my GitHub (click my logo in the footer). Happy
          designing!
        </p>

        <p className="text-xl text-primary max-w-250 text-center">
          Love,
          <br />
          Jojo Vargas
          <br />
          (urban tech researcher at ETH Zurich
          <br />
          with a hatred of overengineered boilerplates
          <br />
          and a desire to style everything manually)
        </p>
      </div>
    </div>
  );
}
