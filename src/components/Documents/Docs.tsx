import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pdfjs, Document, Page } from 'react-pdf';
import { Documents } from '../../enums/Documents';
import Loader from '../Common/Loader/Loader';
import classes from './Docs.module.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

export const Docs = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [file, setFile] = useState<string>('');
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === Documents.Policy) {
      setFile('/Policy.pdf');
    }
    if (pathname === Documents.Rules) {
      setFile('/Rules.pdf');
    }
  }, [pathname]);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  }, []);

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(<Page key={i} pageNumber={i} className={classes.wrapper__page} />);
    }
    return pages;
  };

  return (
    <div className={classes.wrapper}>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        className={classes.wrapper__document}
        loading={<Loader />}
      >
        {renderPages()}
      </Document>
    </div>
  );
};
