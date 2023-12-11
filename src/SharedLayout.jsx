import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Container, Footer, Header } from 'components';

export default function SharedLayout() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Header />
      <main>
        <Suspense fallback={<div>Loading... </div>}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
