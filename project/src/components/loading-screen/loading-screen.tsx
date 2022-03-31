function LoadingScreen(): JSX.Element {
  return (
    <div className="page page--gray">
      <main className="page__main">
        <div className="container">
          <section>
            <p className="login__title"
              style={{
                color: 'rgb(68, 129, 195)',
                fontStyle: 'italic',
                textAlign: 'center',
              }}
            >
              <br />
              <br />
                Loading...
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoadingScreen;
