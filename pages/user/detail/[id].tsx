import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userServiceEdit } from '@/service/user-service';
import Layout from '@/components/organisms/Layout';
import { userType } from '@/service/data-types/user-type';

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [userDetail, setUserDetail] = useState<userType>();

  useEffect(() => {
    if (id && typeof id === 'string') {
      userServiceEdit(id).then((response: { error: boolean; message: string; data: any }) => {
        if (!response.error) {
          setUserDetail(response.data);
        } else {
          alert(response.message);
        }
      });
    }
  }, [id]);

  return (
    <Layout>
      <div className="container-fluid px-4">
        <h1 className="mt-4">Authors Detail</h1>
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6 mb-4">
              <div className="mb-3">
                <label htmlFor="inputName" className="form-label">
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={userDetail?.name || ''}
                  readOnly
                />
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Alamat Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value={userDetail?.email || ''}
                  readOnly
                />
              </div>
            </div>
            <div className="col-sm-6 mb-4">
              <div className="mb-3">
                <label htmlFor="inputBirthdate" className="form-label">
                  Birthdate
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="inputBirthdate"
                  value={userDetail?.birthdate || ''}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

