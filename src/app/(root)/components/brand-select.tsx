'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Brand } from '@/types/brand';
import React from 'react';

interface IBrandSelectProps {
  brands: Brand[];
  defaultValue?: string;
  onValueChanged: (value: string) => void;
}

const BrandSelect = ({
  brands,
  defaultValue,
  onValueChanged,
}: IBrandSelectProps) => {
  return (
    <div>
      <Select onValueChange={onValueChanged} defaultValue={defaultValue}>
        <SelectTrigger className={`w-[180px]`}>
          <SelectValue placeholder="Select Brand" />
        </SelectTrigger>
        <SelectContent>
          {brands?.map((brand, i) => {
            return (
              <SelectItem key={i} value={brand.name}>
                {brand.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default BrandSelect;
