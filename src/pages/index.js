import * as React from 'react';
import Layout from '../components/layout';

// markup
function IndexPage() {
  return (
    <Layout>
      <div className="texture absolute top-0 opacity-10 h-full w-full" />
      <main className="text-two font-paragraph grid grid-cols-12 grid-rows-6">
        <title>Home Page</title>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
        <div>Ciao</div>
      </main>
    </Layout>
  );
}

export default IndexPage;
