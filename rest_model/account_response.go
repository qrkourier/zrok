// Code generated by go-swagger; DO NOT EDIT.

package rest_model

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"

	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
)

// AccountResponse account response
//
// swagger:model accountResponse
type AccountResponse struct {

	// token
	Token string `json:"token,omitempty"`
}

// Validate validates this account response
func (m *AccountResponse) Validate(formats strfmt.Registry) error {
	return nil
}

// ContextValidate validates this account response based on context it is used
func (m *AccountResponse) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *AccountResponse) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *AccountResponse) UnmarshalBinary(b []byte) error {
	var res AccountResponse
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}