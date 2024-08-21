'use client'

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

type WrappedComponentProps = {
  [key: string]: any;
};

const withAdminAuth = <P extends WrappedComponentProps>(WrappedComponent: React.ComponentType<P>) => {
  const ComponentWithAdminAuth: React.FC<P> = (props) => {
    const router = useRouter();
    const { getToken, user_type } = useAuth();

    useEffect(() => { 
      const token = getToken();
      if (!token || user_type !== 'PROF') {
        alert("You are not authorised for this page");
        router.push('/');
      }
    }, [router, getToken, user_type]);

    return <WrappedComponent {...props} />;
  };

  ComponentWithAdminAuth.displayName = `withAdminAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithAdminAuth;
};

export default withAdminAuth;

