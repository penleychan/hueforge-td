'use client';

import { Brand } from '@/types/brand';
import { Filament } from '@/types/filament';
import React, { useEffect, useState } from 'react';
import BrandSelect from './brand-select';
import TDView from './td-view';

const HueForgeTD = () => {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filaments, setFilaments] = useState<Filament[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('Bambu Lab');

  useEffect(() => {
    (async () => {
      await fetch('/data/brands.json')
        .then((response) => response.json())
        .then((data) => setBrands(data));
    })();
  }, []);

  useEffect(() => {
    const brand = brands.find((x) => x.name === selectedBrand);
    if (brand) {
      (async () => {
        try {
          await fetch(brand.filaments)
            .then((response) => response.json())
            .then((data: Filament[]) => {
              setFilaments(
                data
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .sort((a, b) => a.type.localeCompare(b.type)),
              );
            });
        } catch (e) {
          setFilaments([]);
        }
      })();
    }
  }, [brands, selectedBrand]);

  return (
    <div className="flex flex-col gap-8">
      {brands && (
        <BrandSelect
          brands={brands.sort((a, b) => a.name.localeCompare(b.name))}
          defaultValue={selectedBrand}
          onValueChanged={(value) => {
            setSelectedBrand(value);
          }}
        />
      )}

      <TDView filaments={filaments} />
    </div>
  );
};

export default HueForgeTD;
