import React from 'react';
import { ReactLoading } from './Logos/ReactLoading';

export const LoadingSpinner = () => (
  <section className="d-flex justify-content-center">
    <div className="spinner-border" role="status">
      <ReactLoading />
      <p className="sr-only">Loading...</p>
    </div>
  </section>
);