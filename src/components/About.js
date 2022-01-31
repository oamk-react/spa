import React from 'react';
import { useParams } from 'react-router-dom';

export default function About() {
  let params = useParams();

  return (
    <div>
      About {params.id}
    </div>
  );
}