'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

type WrappedComponentProps = {
  [key: string]: any;
};

const withStudentAuth = <P extends WrappedComponentProps>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithStudentAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const { getToken, user_type } = useAuth();

    useEffect(() => {
      const token = getToken();
      if (!token || user_type !== 'STUD') {
        alert("You are not authorised for this page");
        router.push('/');
      }
    }, [router, getToken, user_type]);

    return <WrappedComponent {...props} />;
  };

  ComponentWithStudentAuth.displayName = `withStudentAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithStudentAuth;
};

export default withStudentAuth;

