import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';
// import {withTranslation} from "react-i18next";

// ReactNode - любой React компонент
interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
                </Suspense>
            );
        }
        return children;
    }
}

// export default withTranslation()(ErrorBoundary); // если использовать интернационализацию в классовом компоненте
export default ErrorBoundary;
