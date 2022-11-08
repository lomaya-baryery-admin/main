import { ChangeEvent, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SearchInput } from '../../ui/search-Input/search-input';
import { Layout } from '../layout/layout';

export const AppRoutes = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/shift/all"
            element={
              <div>
                {' '}
                <SearchInput
                  onChange={handleChange}
                  onClear={() => setValue('')}
                  value={value}
                />{' '}
              </div>
            }
          />
          <Route path="/shift/current" element={<div>2</div>} />
          <Route path="/shift/new" element={<div>3</div>} />
          <Route path="/invites/active" element={<div>4</div>} />
          <Route path="/invites/reviewed" element={<div>5</div>} />
          <Route path="/participants" element={<div>6</div>} />
          <Route path="/report/noverified" element={<div>7</div>} />
          <Route path="/report/verified" element={<div>8</div>} />
          <Route path="/report/rejected" element={<div>9</div>} />
          <Route path="*" element={<div>страница не найдена </div>} />
        </Route>
      </Routes>
    </div>
  );
};
