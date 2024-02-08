import Resume from '@/components/section/Resume';
import Spinner from '@/components/shared/spinner';
import { Suspense } from 'react';

const ResumePage = async () => {
    return (
        <Suspense fallback={<Spinner />}>
            <Resume />
        </Suspense>
    )
}

export default ResumePage