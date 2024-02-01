import { useCallback, useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Loader from '../Common/Loader/Loader';
import classes from './Policy.module.scss';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();

export default function Policy() {
  const [numPages, setNumPages] = useState<number>(0);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
  }, []);

  const renderPages = () => {
    const pages = [];
    for (let i = 1; i <= numPages; i++) {
      pages.push(<Page key={i} pageNumber={i} className={classes.react_pdf__Page} />);
    }
    return pages;
  };

  return (
    <div className={classes.Example}>
      <div className={classes.Example__container__document}>
        <Document
          file="/Policy.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className={classes.react_pdf__Document}
          loading={<Loader />}
        >
          {renderPages()}
        </Document>
      </div>
    </div>
  );
}
