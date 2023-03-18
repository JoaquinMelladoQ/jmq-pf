import styles from './Blog.module.css';

export default function BlogPage() {
  return (
    <div className={styles.main}>
      <img src="/haskell-header.jpg" alt="Haskell header image" />
      <h1>Why Haskell is the Language You Didn't Know You Needed</h1>
      <p className={styles.blog}>
        Haskell is a programming language that has been gaining popularity among developers for its simplicity, expressiveness, and safety. It was first released in 1990, but it is still relevant today due to its many advantages over other programming languages.
            </p>

              <h2>Strong Type System</h2>
              <p>
                One of the most significant advantages of Haskell is its strong type system. This means that Haskell can catch many bugs at compile-time, making it less prone to runtime errors. Haskell's type system also makes it easier to reason about the code and leads to more robust and maintainable applications.
                  </p>

                <h2>Lazy Evaluation</h2>
                <p>
                Another advantage of Haskell is its lazy evaluation. This feature allows Haskell to perform calculations only when they are needed, resulting in more efficient code. It also enables developers to write more expressive code by allowing them to manipulate infinite data structures.
                  </p>

                    <h2>Functional Programming Paradigm</h2>
                    <p>
                      Haskell's functional programming paradigm is also a significant advantage. Haskell functions are pure, meaning that they do not have side effects and always return the same result given the same input. This makes it easier to test and debug Haskell code.
                        </p>

                          <h2>Vibrant Community</h2>
                          <p>
                            Haskell also has a vibrant community, with many libraries and tools available for developers to use. These libraries cover a wide range of topics, from web development to scientific computing, making Haskell a versatile language.
                                </p>

                                  <blockquote>
                                    "Haskell is a powerful and expressive programming language that provides safety, efficiency, and maintainability to software projects. With its functional programming paradigm, strong type system, lazy evaluation, and vibrant community, Haskell is a great choice for developers looking for a language that will help them create high-quality and robust applications."
                                      </blockquote>

                                      <p>
                                      In summary, Haskell is a great programming language for developers looking to build high-quality, robust applications. Its strong type system, lazy evaluation, functional programming paradigm, and vibrant community make it a powerful tool in any developer

                                        </p>
                                        </div>
  )
}


